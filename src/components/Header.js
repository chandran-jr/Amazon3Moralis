import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'
import { Link } from 'react-router-dom';
import Amazon from '../images/logo.png';
import BookStore from '../images/bookstore.png';
import USA from '../images/usa.png';
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";

const {Search} = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <img src={Amazon} className="logo" alt="logo" />
          <img src={BookStore} className="logo" alt="logo" />
          <Search
          placeholder="Find a product"
          enterButton
          className="searchBar"/>
         <Button className="login" key="1" type="primary" onClick={() => authenticate()}>
          Login
          </Button>

          <Space size={"large"}>
              
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>
              
            </Space>
          </>
        ]}>
      </PageHeader>

      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
          Categories
        </Space>
        {categories.map((e) =>{
          return(
            <Link to="/categories" state={e} className="categories">
              {e}
            </Link>
          )

        })}
      </Space>
    </div>
    </div>
  )
}

export default Header;