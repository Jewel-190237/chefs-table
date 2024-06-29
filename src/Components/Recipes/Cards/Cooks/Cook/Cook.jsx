import PropTypes from 'prop-types';

const Cook = ({ cook, number }) => {
    const { preparing_time, calories, recipe_name } = cook;
    return (
        <tr className="text-center">
            <th className="px-1">{number}</th>
            <td className="px-1">{recipe_name}</td>
            <td className="px-1"><span>{preparing_time}</span> minutes</td>
            <td className="px-1"><span>{calories} calories</span></td>
            <td className="px-1"><button  className="bg-[#0BE58A] px-3 py-3 rounded-3xl my-3 text-black font-semibold">Preparing</button></td>
        </tr>
    );
};
Cook.propTypes = {
    cook:PropTypes.array.isRequired,
    number:PropTypes.number,
    preparingToHandler:PropTypes.func,
    current:PropTypes.array.isRequired
};
export default Cook;
