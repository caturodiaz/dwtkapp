import React from "react";

const MODIFIERS = [
  "Royal Heir",
  "Royal Marriage",
  "Support of the Church",
  "Support of the Nobles",
  "Court Favor",
  "Royal Office",
  "Civic Office",
  "Order of the Realm",
  "Cultural Figure",
  "Military Victory",
];

function PrestigeModifiers({ data, onChange }) {
  const toggleModifier = (modifier) => {
    onChange({
      ...data,
      [modifier]: !data?.[modifier],
    });
  };

  return (
    <div className="section">
      <h2>Prestige Modifiers</h2>
      <ul className="checkbox-list">
        {MODIFIERS.map((modifier) => (
          <li key={modifier}>
            <label>
              <input
                type="checkbox"
                checked={data?.[modifier] || false}
                onChange={() => toggleModifier(modifier)}
              />
              {modifier}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrestigeModifiers;
