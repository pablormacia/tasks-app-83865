import { Button, Modal, Text, View } from 'react-native'
import { styles } from './confirmDeleteModalStyles'

const ConfirmDeleteModal = ({modalVisibleDown,taskSelectedTitledDown, setModalVisibleUp,deleteTaskUp}) => {
    return (
        <Modal
            visible={modalVisibleDown}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>¿Seguro de eliminar {taskSelectedTitledDown}?</Text>
                <View style={styles.btnContainer}>
                    <Button color="#ccc" title="Cancelar" onPress={() => setModalVisibleUp(false)} />
                    <Button color="#BF3B21" title="Si, eliminar" onPress={deleteTaskUp} />
                </View>
            </View>
        </Modal>
    )
}

export default ConfirmDeleteModal


