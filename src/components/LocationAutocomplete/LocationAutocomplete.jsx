import { useEffect, useState } from "react";
import { fetchLocations } from "../../location";

import sprite from "../../assets/sprite.svg";
import s from "./LocationAutocomplete.module.css";
import { useDebounce } from "../../hooks/useDebounce";

export default function LocationAutocomplete({ value, onChange }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!debouncedValue.trim()) {
        if (!cancelled) setItems([]);
        return;
      }

      try {
        const res = await fetchLocations(debouncedValue);
        if (!cancelled) setItems(res);
      } catch (e) {
        console.error("Location search error:", e);
        if (!cancelled) setItems([]);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [debouncedValue]);

  const handleChange = (e) => {
    onChange(e.target.value);
    setOpen(true); // ✅ открыть при вводе
  };

  const handleSelect = (label) => {
    onChange(label);
    setOpen(false);
  };

  return (
    <div
      className={s.inputWrap}
      onFocus={() => setOpen(true)} // ✅ открыть при фокусе
      onBlur={() => {
        // ✅ закрыть после клика по option (клик успеет отработать)
        setTimeout(() => setOpen(false), 120);
      }}
    >
      <svg className={s.inputIcon} width="20" height="20" aria-hidden="true">
        <use href={`${sprite}#location`} />
      </svg>

      <input
        className={s.input}
        value={value}
        onChange={handleChange}
        placeholder="City"
      />

      {open && items.length > 0 && (
        <ul className={s.dropdown}>
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={s.option}
                onMouseDown={(e) => e.preventDefault()} // ✅ чтобы blur не закрыл раньше клика
                onClick={() => handleSelect(item.label)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
