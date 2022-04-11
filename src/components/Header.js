import { PageHeader, Button } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Amazon Clone"
        extra={[
         <Button key="1" type="primary" onClick={() => authenticate()}>
          Login with Metamask
          </Button>
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;