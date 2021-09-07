import React, {useEffect} from 'react';
import { Empty } from 'antd';

function NotFound(props) {
  useEffect(() => {
    // props.staticContext = {notFound: true}; 
  }, [])
  return (
    <Empty description="404, NOT FOUND" image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );
}

export default NotFound;
