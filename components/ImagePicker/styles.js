import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    box: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {

        backgroundColor: "white",
        borderRadius: 20,
        padding: 28,
        paddingHorizontal: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 100
    },
    button: {
        padding: 8,
        borderBottomWidth: 0.5
        // elevation: 2
    },
    // buttonOpen: {
    //     backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    textStyle: {
        // color: "",
        // fontWeight: "bold",
        fontSize: 17,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 12,
        textAlign: "center",

    }
});
export default styles;