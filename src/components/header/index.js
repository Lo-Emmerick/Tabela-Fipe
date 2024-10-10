import {View, Image,Text} from "react-native"
import styles from "./style"
export default function header(){
  return(
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/icon.png')} 
          style={styles.icon} 
        />
        <Text style={styles.title}>Show Me The Price</Text>
      </View>
  )
}