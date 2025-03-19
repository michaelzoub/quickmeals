import { ThemedView } from "@/components/ThemedView";
import { Button, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from "react";
import { Image } from "expo-image";
import { sendImageToOpenAI } from "../api/api";
import { useAtom } from "jotai";
import { recipeAtom } from "../atoms/recipes";

//if i want to render image: <Image src={{uri}}/>

const containerStlye = `flex flex-col h-full px-2 bg-white items-center justify-center`

export default function CameraPage() {

    const [permission, requestPermission] = useCameraPermissions();
    const [recipe, setRecipe] = useAtom(recipeAtom);
    const [uri, setUri] = useState<string | null>(null);

    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }

      if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={tw`${containerStlye}`}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button style={styles.buttonStyle} onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

      //get picture
      async function takePicture() {
        const photo = await cameraRef.current?.takePictureAsync();
        setUri(photo?.uri);
      }

      async function sendReceivePicture() {
        const information = await sendImageToOpenAI(uri);
        console.log(information);
        //set atoms so it can later be stored in app cache
        setRecipe({
          recipeName: information.recipeName,
          ingredients: information.ingredients,
          time: information.time,
          direction: information.direction,
          servings: information.servings,
          imageUrl: information.imageUrl
        })
      }

      function picture() {
        return (
                <View>
                    <Image src={{uri}}></Image>
                    <Button onClick={sendReceivePicture}>Use picture</Button>
                </View>
            )
        }

        function cameraRender() {
            return (
                <View style={tw`${containerStlye}`}>
                <CameraView style={styles.camera} facing={facing}>
                  <View style={styles.buttonContainer}>
                  <Pressable onPress={takePicture}>
                  {({ pressed }) => (
                    <View
                      style={[
                        styles.shutterBtn,
                        {
                          opacity: pressed ? 0.5 : 1,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.shutterBtnInner,
                          {
                            backgroundColor: "white",
                          },
                        ]}
                      />
                    </View>
                  )}
                </Pressable>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                      <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                  </View>
                </CameraView>
              </View>
            )
        }

      return (
        <View>
            {
                uri ? picture() : cameraRender()
            }
        </View>
      );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
        
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderRadius: 10
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    shutterBtnInner: {
      width: 70,
      height: 70,
      borderRadius: 50,
    },
  });