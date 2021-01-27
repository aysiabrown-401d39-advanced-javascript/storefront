import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {change} from '../store/categories'
// import {changeActive} from '../store/active-category'
import {connect} from 'react-redux';

const mapDispatchToProps = {change};

const mapStateToProps = state => ({
    inventory: state.products,
    current: state.current,
    categories: state.categories,
})

function Categories(props) {

    const handleClick = (e, val) => {
        e.preventDefault();
        props.change(val);
        console.log('category', props.categories.categories);
    }

    return (
        <>
        <Typography variant='caption'>BROWSE CATEGORIES</Typography>
            <Breadcrumbs aria-label="breadcrumb">
            {props.categories.categories.map(category => {
                return(<Link color='inherit' href='/' onClick={(e) => handleClick(e, category)}>{category}</Link>)
            })}
            </Breadcrumbs>
            <Typography variant='h1'>{props.current.active}</Typography>
            </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);