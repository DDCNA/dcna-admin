// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import SuccessSnackbar from 'components/SuccessSnackbar';
import LoaderSlider from 'components/LoaderSlider';


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <SuccessSnackbar />
        <LoaderSlider />
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

// Set default headers for Axios to handle CORS
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default App;
