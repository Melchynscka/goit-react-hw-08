import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectFilterValue } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const filtersName = useSelector(selectFilterValue);
    const dispatch = useDispatch();
    return (
        <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filtersName}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
    )
}