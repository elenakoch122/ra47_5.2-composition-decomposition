import Section from "./Section";

// отображает различные разделы
export default function Sections() {
  return (
    <div className="sections"> Блок Разделы
      <br />
      {'<Sections />'}
      <Section />
      <Section />
      <Section />
    </div>
  );
}