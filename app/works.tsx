import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';

const works = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled>
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', gap: 30, paddingVertical: 10 }}>
                <View style={[styles.tile, { width: '55%', backgroundColor: '#cc99ff' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Legal Intelligence</Text>
                        <Text style={styles.subText}>An AI levereging application to facilitate students and professions in law research in India. This project involves finetuning of pretrained LLMs on Indian Bare Acts dataset.</Text>
                        <Text style={styles.note}>(This is my final year project which I'm currently working on, so stay tuned for updates!)</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Flask</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Python</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>PyTorch</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={styles.arrowView}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Legal-Intelligence'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>


                <View style={[styles.tile, { width: '45%', backgroundColor: '#99ccff' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Safe Hire</Text>
                        <Text style={styles.subText}>An intelligent watchdog against shady postings and malicious links on freelancing sites.</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Flask</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Pandas</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Scikit-learn</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#ccffff' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Job-Posting-Scam-Detector'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>
            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', gap: 30, paddingVertical: 10 }}>
                <View style={[styles.tile, { width: '40%', backgroundColor: '#66ff66' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>CommitTrack</Text>
                        <Text style={styles.subText}>An efficient habit tracker that motivates you to commit to your goals, helping you with consistency and fulfillment.</Text>
                        <Text style={styles.note}>(This is an ongoing project, I work on it whenever inspiration hits :)  )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>ReactNative</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Firebase</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Redux</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#ccffcc' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Commit-Track'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>



                <View style={[styles.tile, { width: '60%', backgroundColor: '#ff9999' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Customer Churn Prediction</Text>
                        <Text style={styles.subText}>A data analytics project exploring, preprocessing a Teleco dataset from Kaggle, training with ML algorithms to find potential customer churn.</Text>
                        <Text style={styles.note}>(The python notebook and the link to the dataset is added in my github repository. Check it out! )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Python</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Pandas</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Scikit-learn</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Matplotlib</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#ffcccc' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Customer-Churn-Prediction'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', gap: 30, paddingVertical: 10 }}>
                <View style={[styles.tile, { width: '45%', backgroundColor: '#ff66b2' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Snap&Find</Text>
                        <Text style={styles.subText}>A shopping assistant helps you by reverse image search function, and recommends relevant fashion apparels with comparisons.</Text>
                        <Text style={styles.note}>(This is an ongoing project, I work on it whenever inspiration hits :)  )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>ReactNative</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Firebase</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Image Search</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#ffcce5' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Snap-and-Find'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>



                <View style={[styles.tile, { width: '55%', backgroundColor: '#ffff66' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Music player application</Text>
                        <Text style={styles.subText}>A simple music player web application developed with Django framework.</Text>
                        <Text style={styles.note}>(  Checkout my github link to know more! )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Python</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Django</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#ffffcc' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Music-player-Django'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>

            </View>
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', gap: 30, paddingVertical: 10 }}>
                <View style={[styles.tile, { width: '50%', backgroundColor: '#b2ff66' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>Chat App</Text>
                        <Text style={styles.subText}>A simple chat application that supports group chats, real time conversations with media support too.</Text>
                        <Text style={styles.note}>( This was my first project in using ReactNative and Expo. )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>ReactNative</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Firebase</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#e5ffcc' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Snap-and-Find'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>



                <View style={[styles.tile, { width: '50%', backgroundColor: '#66b2ff' }]}>
                    <View style={styles.tileContent}>
                        <Text style={styles.heading}>My portfolio</Text>
                        <Text style={styles.subText}>A previous version on my portfolio website created with React & Vite.</Text>
                        <Text style={styles.note}>(  Checkout my github link to view! )</Text>
                        <View style={styles.bottomContent}>
                            <View style={styles.stackContainer}>
                                <Text style={styles.text}>TechStack:</Text>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>React</Text>
                                </View>
                                <View style={styles.stack}>
                                    <Text style={styles.text}>Vite</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[styles.arrowView, { backgroundColor: '#cce5ff' }]}>
                            <FontAwesome5 name="location-arrow" size={28} color="black" />
                        </View>
                        <Link href={'https://github.com/Miru-nalini/Music-player-Django'}><Text style={styles.linkText}>Github</Text></Link>
                    </View>
                </View>



            </View>
        </ScrollView>
    )
}

export default works

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 60,
        marginTop: 20
    },
    tile: {
        height: 400,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 40,
        padding: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 8,
    },
    heading: {
        fontFamily: 'boldItalic',
        fontSize: 48,
        color: 'black',
    },
    subText: {
        fontFamily: 'regular',
        fontSize: 24,
        color: '#0c0c0c',
    },
    stackContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 10

    },
    stack: {
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50
    },
    text: {
        fontFamily: 'regular',
        fontSize: 16,
        color: 'white',
    },
    tileContent: {
        flexDirection: 'column',
        width: '90%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    arrowView: {
        borderRadius: '100%',
        borderColor: 'black',
        borderWidth: 3,
        padding: 20,
        backgroundColor: '#E5CCFF',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    linkText: {
        fontFamily: 'regular',
        fontSize: 12,
        color: 'black',
        textDecorationLine: 'underline',
        textDecorationColor: 'black',
    },
    note: {
        fontFamily: 'italic',
        fontSize: 16,
        color: '#404040'
    }
})