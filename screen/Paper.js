import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme, Modal, Portal, PaperProvider, Button, List, Appbar, FAB, Badge, Avatar, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';



const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const Paper = () => {


    const { bottom } = useSafeAreaInsets();

    const theme = useTheme()
    const [visible, setVisible] = React.useState(false);

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };


    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.onError }}>
            <Text>Paper</Text>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>


            <Badge>5    <AntDesign style={{ margin: 10 }} name="down" color={'black'} size={12} />
            </Badge>
            <Appbar
                style={[
                    styles.bottom,
                    {
                        height: BOTTOM_APPBAR_HEIGHT + bottom,
                        backgroundColor: theme.colors.elevation.level2,
                    },
                ]}
                safeAreaInsets={{ bottom }}
            >
                <Appbar.Action icon="archive" onPress={() => { }} />
                <Appbar.Action icon="email" onPress={() => { }} />
                <Appbar.Action icon="label" onPress={() => { }} />
                <Appbar.Action icon="delete" onPress={() => { }} />
                <FAB
                    mode="flat"
                    size="medium"
                    icon="plus"
                    onPress={() => { }}
                    style={[
                        styles.fab,
                        { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                />
            </Appbar>

            <Button title='press me' icon="account-check" onPress={() => console.log("Button pressed")}>
                Press me
            </Button>


            <PaperProvider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Image source={require('../img/profile3.png')} style={{ height: 200, width: 200 }} />
                    </Modal>
                </Portal>
                <Button style={{ marginTop: 30 }} onPress={showModal}>
                    Show
                </Button>
            </PaperProvider>

            {/* <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card> */}

        </View>
    )
}

export default Paper

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
})