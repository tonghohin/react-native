import { ListItem } from "@rneui/themed";

export default function PrizesHome({ navigation }) {
    return (
        <>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "phy" })}>
                <ListItem.Content>
                    <ListItem.Title>Physics</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "che" })}>
                <ListItem.Content>
                    <ListItem.Title>Chemistry</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "med" })}>
                <ListItem.Content>
                    <ListItem.Title>Physiology or Medicine</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "lit" })}>
                <ListItem.Content>
                    <ListItem.Title>Literature</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "pea" })}>
                <ListItem.Content>
                    <ListItem.Title>Peace</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: "eco" })}>
                <ListItem.Content>
                    <ListItem.Title>Economic sciences</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </>
    );
}
