import Content from '@/components/Content';
import EmptyState from '@/components/EmptyState';
import Page from '@/components/Page';

const NotFound = () => {
  return (
    <Page name="404">
      <Content>
        <EmptyState
          message="page not found"
          sub="click here to return to home"
        />
      </Content>
    </Page>
  );
};

export default NotFound;
