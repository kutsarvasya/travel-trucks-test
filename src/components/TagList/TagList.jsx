import TagItem from "../TagItem/TagItem";

function TagList({ item }) {
  return (
    <>
      <TagItem label={item.transmission} icon="transmission" />

      <TagItem label={item.engine} icon="fuel" />

      {item.AC && <TagItem label="AC" icon="wind" />}
      {item.bathroom && <TagItem label="bathroom" icon="bathroom" />}
      {item.kitchen && <TagItem label="kitchen" icon="kitchen" />}
      {item.TV && <TagItem label="TV" icon="tv" />}
      {item.radio && <TagItem label="radio" icon="radio" />}
      {item.refrigerator && (
        <TagItem label="refrigerator" icon="refrigerator" />
      )}
      {item.microwave && (
        <TagItem label="microwave" icon="microwave" fill={true} />
      )}
      {item.gas && <TagItem label="gas" icon="gas" fill={true} />}
      {item.water && <TagItem label="water" icon="water" fill={true} />}
    </>
  );
}

export default TagList;
