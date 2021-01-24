import { HStack, Tag } from '@chakra-ui/react';

const Tags = (props) => {
  const { tags = [] } = props;

  const list = tags.map((item, idx) => {
    const { tag, color } = item;
    const key = `tag${idx}`;
    return (
      <Tag key={key} colorScheme={color}>
        {tag}
      </Tag>
    );
  });

  return <HStack spacing={3}>{list}</HStack>;
};

export default Tags;
