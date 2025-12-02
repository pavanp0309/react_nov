import { useState, useEffect } from "react";
import { api } from "../api/api";

const User = () => {
  // states for handling the Form and loading and error
  const [user, setUser] = useState([]); // array of users
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });

  // state for Holding edit id and editform data
  const [editId, setEditId] = useState(null);
  const [editform, setEditForm] = useState({ name: "", email: "", mobile: "", password: "" });

  // useeffect for Fetching the data on initial Load
  useEffect(() => {
    const ac = new AbortController();
    async function load() {
      setLoading(true);
      setIsError("");
      try {
        const data = await api.listUser(ac.signal);
        setUser(data || []);
      } catch (e) {
        if (e?.name !== "AbortError") setIsError(e?.message || "failed to fetch the data");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => ac.abort();
  }, []);

  // function to handle The form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // function to validate the userdata from the form
  // returns empty string when valid, otherwise an error message
  function validate(obj) {
    if (!obj.name || !obj.name.trim()) return "name is Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email)) return "enter proper email format";
    if (!/^\d{10}$/.test(obj.mobile)) return "mobile no should contain 10 digits";
    if (!obj.password || obj.password.length < 6) return "password length should be at least 6";
    return "";
  }

  // function to create the user Data into the database
  async function CreateUser(e) {
    e.preventDefault();

    const v = validate(form);
    if (v) {
      setIsError(v);
      return;
    }
    setIsError("");

    // optimistic UI
    const tempId = `temp-${Date.now()}`;
    const op = { id: tempId, ...form };
    setUser((u) => [op, ...u]);
    setForm({ name: "", email: "", mobile: "", password: "" });

    try {
      // send payload (remove temp id if backend assigns id)
      const payload = { name: op.name, email: op.email, mobile: op.mobile, password: op.password };
      const created = await api.createUser(payload);
      // replace temp entry with created entry (if backend returned created with id)
      if (created && created.id !== undefined) {
        setUser((u) => u.map((x) => (x.id === tempId ? created : x)));
      } else {
        // fallback: refresh list
        const fresh = await api.listUser();
        setUser(fresh || []);
      }
    } catch (e) {
      // rollback optimistic change
      setUser((u) => u.filter((x) => x.id !== tempId));
      setIsError(e?.message || "failed to create the User");
    }
  }

  // function to Edit The Data and update in the database (start edit)
  function EditUser(uObj) {
    setEditId(uObj.id);
    setEditForm({
      name: uObj.name || "",
      email: uObj.email || "",
      mobile: uObj.mobile || "",
      password: uObj.password || ""
    });
    setIsError("");
  }

  // function to cancel The Edit
  function cancelEdit() {
    setEditId(null);
    setEditForm({ name: "", email: "", mobile: "", password: "" });
    setIsError("");
  }

  // function to save the Edit
  async function SaveEdit(id) {
    const v = validate(editform);
    if (v) {
      setIsError(v);
      return;
    }
    setIsError("");

    // optimistic update
    const previous = user;
    setUser((u) => u.map((x) => (x.id === id ? { id, ...editform } : x)));

    try {
      const updated = await api.updateUser(id, editform);
      if (updated && updated.id !== undefined) {
        setUser((u) => u.map((x) => (x.id === id ? updated : x)));
      } else {
        // fallback to fetching fresh list
        const fresh = await api.listUser();
        setUser(fresh || []);
      }
    } catch (error) {
      // rollback on error
      setUser(previous);
      setIsError(error?.message || "failed to update ");
      return;
    } finally {
      setEditId(null);
      setEditForm({ name: "", email: "", mobile: "", password: "" });
    }
  }

  // delete handler (optimistic + rollback)
  async function handleDelete(id) {
    setIsError("");
    const previous = user;
    setUser((u) => u.filter((x) => x.id !== id));
    try {
      await api.deleteUser(id);
      // success - nothing else required
    } catch (e) {
      // rollback
      setUser(previous);
      setIsError(e?.message || "failed to delete");
    }
  }

  // handlers for edit form inputs
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <div className="container p-3 my-3">
      {/* form to create the User */}
      <div>
        <form onSubmit={CreateUser}>
          <label htmlFor="form-label">fullname</label>
          <input
            type="text"
            placeholder="enter"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="form-label">Email </label>
          <input
            type="email"
            placeholder="enter ur email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="form-label">Mobile</label>
          <input
            type="tel"
            placeholder="enter ur Mobile"
            name="mobile"
            className="form-control"
            value={form.mobile}
            onChange={handleChange}
          />

          <label htmlFor="form-label">password</label>
          <input
            type="password"
            placeholder="enter ur password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />

          <button className="btn btn-success" type="submit">
            createUser
          </button>
        </form>
      </div>

      {isError && (
        <div style={{ color: "crimson", marginBottom: 8 }}>
          {isError} <button onClick={() => setIsError("")}>Dismiss</button>
        </div>
      )}

      <div style={{ marginBottom: 8 }}>Users: {loading ? "Loading…" : user.length}</div>

      <div style={{ border: "1px solid #eee", borderRadius: 6 }}>
        {loading ? (
          <div style={{ padding: 12 }}>Loading…</div>
        ) : user.length === 0 ? (
          <div style={{ padding: 12 }}>No users</div>
        ) : (
          user.map((u) => {
            const isEditing = editId === u.id;
            return (
              <div
                key={u.id}
                style={{ display: "flex", gap: 8, alignItems: "center", padding: 8, borderBottom: "1px solid #fafafa" }}
              >
                {isEditing ? (
                  <div style={{ flex: 1, display: "grid", gap: 6 }}>
                    <input name="name" value={editform.name} onChange={handleEditChange} placeholder="Name" />
                    <input name="email" value={editform.email} onChange={handleEditChange} placeholder="Email" />
                    <input
                      type="password"
                      name="password"
                      value={editform.password}
                      onChange={handleEditChange}
                      placeholder="Password"
                    />
                    <input name="mobile" value={editform.mobile} onChange={handleEditChange} placeholder="Mobile" />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => SaveEdit(u.id)}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{u.name}</div>
                      <div style={{ fontSize: 13, color: "#555" }}>
                        {u.email} • {u.mobile}
                      </div>
                    </div>
                    <button onClick={() => EditUser(u)}>Edit</button>
                    <button onClick={() => handleDelete(u.id)}>Delete</button>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

     
    </div>
  );
};

export default User;
