import Section from "./Section";

// отображает различные разделы
export default function Sections({ list }) {
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