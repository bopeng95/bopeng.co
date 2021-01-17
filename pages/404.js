import Content from '@/components/Content';
import EmptyState from '@/components/EmptyState';

const NotFound = () => {
  return (
    <Content>
      <EmptyState message="page not found" sub="click here to return to home" />
    </Content>
  );
};

export default NotFound;
