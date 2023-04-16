import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ListItem } from "@rneui/themed";

export default function PrizeDetails({ route }) {
    const [prizeData, setPrizeData] = useState([]);

    useEffect(() => {
        fetch(`https://api.nobelprize.org/2.1/nobelPrize/${route.params.category}/${route.params.year}`)
            .then((res) => res.json())
            .then(([data]) => {
                setPrizeData(data);
            });
    }, []);

    return (
        <ScrollView>
            <Text>{prizeData.awardYear}</Text>
            <Text>{JSON.stringify(prizeData.laureates)}</Text>
        </ScrollView>
    );
}
