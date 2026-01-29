import React, { useState } from 'react';

const GeneralSettingsPanel = () => {
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
    language: 'en',
    theme: 'light',
    privacy: 'public',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    alert('Settings saved!');
    // Save logic here
  };

  const handleCancel = () => {
    alert('Changes canceled!');
    // Reset logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Settings</h2>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={settings.name}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your name"
          autoComplete="off"
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
          autoComplete="off"
        />
      </div>

      <div style={{ ...styles.field, flexDirection: 'row', alignItems: 'center' }}>
        <input
          id="notifications"
          type="checkbox"
          name="notifications"
          checked={settings.notifications}
          onChange={handleChange}
          style={styles.checkbox}
        />
        <label style={{ ...styles.label, marginLeft: 10 }} htmlFor="notifications">
          Enable Notifications
        </label>
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="language">Language</label>
        <select
          id="language"
          name="language"
          value={settings.language}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="theme">Theme</label>
        <select
          id="theme"
          name="theme"
          value={settings.theme}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="privacy">Privacy</label>
        <select
          id="privacy"
          name="privacy"
          value={settings.privacy}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends Only</option>
        </select>
      </div>

      <div style={styles.buttons}>
        <button
          onClick={handleSave}
          style={{ ...styles.button, ...styles.save }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0097a7')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00bcd4')}
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          style={{ ...styles.button, ...styles.cancel }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d32f2f')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f44336')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 480,
    margin: '30px auto',
    padding: '30px 35px',
    borderRadius: 14,
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fff',
    color: '#222',
    userSelect: 'none',
  },
  header: {
    marginBottom: 30,
    fontWeight: 700,
    fontSize: '2rem',
    borderBottom: '3px solid #00bcd4',
    paddingBottom: 12,
    letterSpacing: '0.03em',
  },
  field: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 600,
    marginBottom: 8,
    fontSize: '1rem',
    color: '#333',
    cursor: 'pointer',
  },
  input: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: 8,
    border: '2px solid #ccc',
    outlineOffset: 2,
    outlineColor: 'transparent',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: 'inherit',
    color: '#222',
    backgroundColor: '#fafafa',
  },
  select: {
    padding: '10px 14px',
    fontSize: '1rem',
    borderRadius: 8,
    border: '2px solid #ccc',
    outlineOffset: 2,
    outlineColor: 'transparent',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  checkbox: {
    width: 22,
    height: 22,
    cursor: 'pointer',
    accentColor: '#00bcd4',
    transition: 'accent-color 0.3s ease',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  button: {
    flex: 1,
    padding: '12px 0',
    fontSize: '1.1rem',
    fontWeight: 700,
    borderRadius: 12,
    cursor: 'pointer',
    border: 'none',
    userSelect: 'none',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    transition: 'background-color 0.3s ease, box-shadow 0.2s ease',
    marginLeft: 0,
  },
  save: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    marginRight: 15,
  },
  cancel: {
    backgroundColor: '#f44336',
    color: '#fff',
  },
};

export default GeneralSettingsPanel;
