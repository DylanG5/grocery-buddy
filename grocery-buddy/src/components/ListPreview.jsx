export default function ListPreview() {
    let sampleList = ["item a", "item b", "item c", "item d"];
    return (
        <ul className="list-preview">
            {sampleList.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    );
}
