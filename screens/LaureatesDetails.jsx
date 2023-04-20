import { Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Card } from "@rneui/themed";

function LaureatesDetails({ route }) {
    const [laureateData, setLaureateData] = useState({});

    useEffect(() => {
        fetch(`https://api.nobelprize.org/2.1/laureate/${route.params.id}`)
            .then((res) => res.json())
            .then(([data]) => {
                setLaureateData(data);
            });
    }, []);

    return (
        <ScrollView>
            {laureateData.knownName || laureateData.orgName ? (
                <Card containerStyle={{ marginTop: 15 }}>
                    <Card.Title>{laureateData.knownName?.en || laureateData.orgName?.en}</Card.Title>
                    <Card.Divider />
                    {laureateData.founded && <Text>Founded: {laureateData.founded.date}</Text>}
                    {laureateData.birth && (
                        <Text>
                            Born: {laureateData.birth.date}, {laureateData.birth.place.locationString.en}
                        </Text>
                    )}
                    <Card.Divider />
                    <Text>Prizes</Text>
                    {laureateData.nobelPrizes.map((prize, i) => (
                        <Text key={i}>
                            {prize.categoryFullName.en} - {prize.awardYear}
                        </Text>
                    ))}
                </Card>
            ) : (
                <ActivityIndicator size="large" marginVertical={8} />
            )}
        </ScrollView>
    );
}

export default LaureatesDetails;
