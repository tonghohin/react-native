import { useEffect, useState } from "react";
import { ScrollView, Text, ActivityIndicator, View } from "react-native";
import { Card } from "@rneui/themed";

export default function PrizeDetails({ route }) {
    const [prizeData, setPrizeData] = useState({});

    useEffect(() => {
        fetch(`https://api.nobelprize.org/2.1/nobelPrize/${route.params.category.shortName}/${route.params.year}`)
            .then((res) => res.json())
            .then(([data]) => {
                setPrizeData(data);
            });
    }, []);

    return (
        <ScrollView>
            {prizeData.laureates ? (
                <Card>
                    <Card.Title>
                        The {route.params.year} Nobel Prize for {route.params.category.fullName}
                    </Card.Title>
                    <Card.Divider />
                    <Text>Date Awarded: {prizeData.dateAwarded}</Text>
                    <Text>Prize Amount: {prizeData.prizeAmount} SEK (Swedish Krona)</Text>
                    <Card.Divider />
                    <View style={{ gap: "5px" }}>
                        <Text style={{ fontWeight: "bold" }}>Laureates</Text>
                        {prizeData.laureates.map((laureate, i) => (
                            <Text key={i} style={{ fontWeight: "bold" }}>
                                {laureate.knownName?.en || laureate.orgName?.en} <Text style={{ fontWeight: "normal" }}>{laureate.motivation.en}</Text>
                            </Text>
                        ))}
                    </View>
                </Card>
            ) : (
                <ActivityIndicator size="large" marginVertical={8} />
            )}
        </ScrollView>
    );
}
