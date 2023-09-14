import { useDispatch, useSelector } from "react-redux"
import { getActivity } from "../Redux/actions";
import { useEffect } from "react";


const AllActivities = () => {

    const dispatch = useDispatch();
    const Activities = useSelector((state) => state.Activities);
    useEffect(()=>{
        dispatch(getActivity())
    },[dispatch])

    return (
        <div>{Activities ?
            Activities.map((act) => (
                <div>
                    <h1>Name: {act.name}</h1>
                    <h1>Difficulty: {act.difficulty}</h1>
                    <h1>Season: {act.season}</h1>
                    <h1>Duration: {act.duration}</h1>
                    <h1>Countries: {act?.Countries?.map((count, indice) => {
                        if (indice === (act.Countries.length - 1)) {
                            return count.name
                        } else {
                            return `${count.name}, `

                        }
                    })}</h1>
                </div>
            )) : <h1>No activity was created</h1>}

        </div>
    )
}

export default AllActivities;