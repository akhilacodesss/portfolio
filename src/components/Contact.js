import { useState } from "react";

import { C } from "../styles/tokens";

import LineIn from "./ui/LineIn";
import Up from "./ui/Up";
import DrawRule from "./ui/DrawRule";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const maxChars = 500;

  const submit = (e) => {
    e.preventDefault();

    window.location.href =
      `mailto:akhila.goundla1112@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText("akhila.goundla1112@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <section
      id="contact"
      style={{
        background: C.cream,
        padding: "clamp(80px,11vh,140px) clamp(20px,5vw,72px)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(56px,8vh,96px)" }}>
          <LineIn>
            <h2
              style={{
                fontFamily: C.serif,
                fontWeight: 300,
                letterSpacing: "-2px",
                fontSize: "clamp(56px,10vw,140px)",
                lineHeight: 0.88,
                color: C.wine,
              }}
            >
              Let's build
            </h2>
          </LineIn>

          <LineIn delay={0.12}>
            <h2
              style={{
                fontFamily: C.serif,
                fontWeight: 300,
                letterSpacing: "-2px",
                fontSize: "clamp(56px,10vw,140px)",
                lineHeight: 0.88,
                color: C.copper,
                fontStyle: "italic",
              }}
            >
              something real.
            </h2>
          </LineIn>
        </div>

        <DrawRule delay={0.2} />

        <div
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(40px,6vw,100px)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <Up delay={0.1}>
            <p
              style={{
                fontFamily: C.sans,
                fontSize: 15,
                lineHeight: 1.9,
                color: C.mist,
                fontWeight: 300,
                marginBottom: 48,
              }}
            >
              Seeking full-stack developer opportunities where I can build
              impactful products, grow as an engineer, and contribute to
              real-world applications.
            </p>

            {[
              {
                label: "Email",
                value: "akhila.goundla1112@gmail.com",
                href: "mailto:akhila.goundla1112@gmail.com",
                copyable: true,
              },
              {
                label: "GitHub",
                value: "github.com/akhilacodesss",
                href: "https://github.com/akhilacodesss/",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/akhila-goud",
                href: "https://www.linkedin.com/in/akhila-goud-278b8537b/",
              },
            ].map(({ label, value, href, copyable }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "15px 0",
                  borderBottom: `1px solid ${C.ghost}`,
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-c
                  style={{
                    display: "flex",
                    gap: 20,
                    textDecoration: "none",
                    alignItems: "baseline",
                    flex: 1,
                    transition:
                      "padding-left .3s cubic-bezier(.16,1,.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.paddingLeft = "10px")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.paddingLeft = "0")
                  }
                >
                  <span
                    style={{
                      fontFamily: C.mono,
                      fontSize: 9,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: C.mist,
                      width: 68,
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>

                  <span
                    style={{
                      fontFamily: C.sans,
                      fontSize: 13,
                      color: C.wine,
                      transition: "color .25s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = C.copper)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = C.wine)
                    }
                  >
                    {value}
                  </span>
                </a>

                {copyable && (
                  <button
                    data-c
                    onClick={copyEmail}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "none",
                      fontFamily: C.mono,
                      fontSize: 9,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: copied ? "#8BC18A" : C.mist,
                      transition: "color .3s",
                      padding: 0,
                      flexShrink: 0,
                    }}
                  >
                    {copied ? "copied ✓" : "copy"}
                  </button>
                )}
              </div>
            ))}
          </Up>

          <Up delay={0.2}>
            <form
              onSubmit={submit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                }}
              >
                {[
                  ["Name", "name", "text", "Your name"],
                  ["Email", "email", "email", "your@email.com"],
                ].map(([l, f, t, ph]) => (
                  <div key={f}>
                    <label
                      style={{
                        fontFamily: C.mono,
                        fontSize: 9,
                        letterSpacing: 2.5,
                        textTransform: "uppercase",
                        color: C.dusty,
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      {l}
                    </label>

                    <input
                      type={t}
                      value={form[f]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [f]: e.target.value,
                        })
                      }
                      placeholder={ph}
                      required
                      style={{
                        width: "100%",
                        padding: "11px 0",
                        border: "none",
                        borderBottom: `1px solid ${C.ghost}`,
                        background: "transparent",
                        fontFamily: C.sans,
                        fontSize: 14,
                        color: C.wine,
                        outline: "none",
                        transition: "border-color .25s",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 10,
                  }}
                >
                  <label
                    style={{
                      fontFamily: C.mono,
                      fontSize: 9,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: C.dusty,
                    }}
                  >
                    Message
                  </label>

                  <span
                    style={{
                      fontFamily: C.mono,
                      fontSize: 9,
                      color:
                        form.message.length > maxChars * 0.8
                          ? C.copper
                          : C.mist,
                    }}
                  >
                    {form.message.length} / {maxChars}
                  </span>
                </div>

                <textarea
                  value={form.message}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars) {
                      setForm({
                        ...form,
                        message: e.target.value,
                      });
                    }
                  }}
                  placeholder="What are you building?"
                  rows={4}
                  required
                  style={{
                    width: "100%",
                    padding: "11px 0",
                    border: "none",
                    borderBottom: `1px solid ${C.ghost}`,
                    background: "transparent",
                    fontFamily: C.sans,
                    fontSize: 14,
                    color: C.wine,
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  data-c
                  style={{
                    fontFamily: C.sans,
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    background: C.wine,
                    color: C.ink,
                    border: "none",
                    padding: "14px 36px",
                    borderRadius: 2,
                    cursor: "none",
                    transition:
                      "background .25s, transform .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.plum;
                    e.currentTarget.style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.wine;
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  Send Message →
                </button>
              </div>
            </form>
          </Up>
        </div>
      </div>
    </section>
  );
}