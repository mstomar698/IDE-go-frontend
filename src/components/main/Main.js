import { Container, MainStyle, Toolbar } from '../../mainStyles';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { PreLoader } from '../preLoader/PreLoader';
import Home from '../home/Home'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import Theme from '../../styles/theme';

const Main = ({ theme, toggleTheme }) => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const toggleDrawer = () => {
    setDrawerVisibility(!drawerVisibility);
  };
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return !isLoading ? (
    <>
    <Container>
    {/*_________________________________NavBar________________________________________ */}
        <Toolbar.View fixed>
          <a href="/">
            <img
              src={require(`../../assets/images/${
                Theme.getName() === 'light' ? 'B.svg' : 'B-rem.png' 
              }`)}
              width={50}
              alt={'Logo'}
            />
          </a>
          <Toolbar.Actions>
            <a href="/">Home</a>
            <a href="/">Login</a>
            <a href="/">SignUp</a>
            <span href="#">
              {Theme.getName() === 'light' ? (
                <FaIcons.FaMoon size={36} onClick={toggleTheme} />
              ) : (
                <FaIcons.FaSun size={36} onClick={toggleTheme} />
              )}
            </span>
          </Toolbar.Actions>
          <Toolbar.Button onClick={toggleDrawer}>
            <AiIcons.AiOutlineMenu size={28} color={theme.colors.text} />
          </Toolbar.Button>
        </Toolbar.View>

        {drawerVisibility && (
          <MainStyle.View>
            <MainStyle.Item onClick={toggleDrawer} href={'/'}>
              Home
            </MainStyle.Item>
            <MainStyle.Item onClick={toggleDrawer} href={'/'}>
              Login
            </MainStyle.Item>
            <MainStyle.Item onClick={toggleDrawer} href={'/'}>
            SignUp
            </MainStyle.Item>
            <MainStyle.Item href={'#'}>
              {Theme.getName() === 'light' ? (
                <FaIcons.FaMoon size={36} onClick={toggleTheme} />
              ) : (
                <FaIcons.FaSun size={36} onClick={toggleTheme} />
              )}
            </MainStyle.Item>
          </MainStyle.View>
        )}
        {/*_________________________________Home________________________________________ */}
        <div className="flex flex-col text-7xl h-full items-center justify-center text-black-700">
          <Home theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/*________________________________Footer_________________________________________ */}
        <Footer theme={theme} />
      </Container>
    </>
  ) : (
    <PreLoader />
  );
};

export default withTheme(Main);
