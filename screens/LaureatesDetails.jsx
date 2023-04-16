import { Text } from "react-native";
import { useEffect, useState } from "react";

function LaureatesDetails({ route }) {
    const [laureateData, setLaureateData] = useState([]);

    useEffect(() => {
        fetch(`https://masterdataapi.nobelprize.org/2.1/laureate/${route.params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("datasadvasdvasdvsd", data);
                setLaureateData(data);
            });
    }, []);

    return <Text>{laureateData.knownName.en}</Text>;
}

export default LaureatesDetails;
