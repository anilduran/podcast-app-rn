import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './screens/FeedScreen';
import LibraryScreen from './screens/LibraryScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreatePodcastListScreen from './screens/CreatePodcastListScreen';
import PodcastListsScreen from './screens/PodcastListsScreen';
import UpdatePodcastListScreen from './screens/UpdatePodcastListScreen';
import CreatePodcastScreen from './screens/CreatePodcastScreen';
import UpdatePodcastScreen from './screens/UpdatePodcastScreen';
import PodcastsScreen from './screens/PodcastsScreen';
import ListenPodcastScreen from './screens/ListenPodcastScreen';
import PodcastListDetailScreen from './screens/PodcastListDetailScreen';
import PodcastDetailScreen from './screens/PodcastDetailScreen';
import SubscribedPodcastListsScreen from './screens/SubscribedPodcastListsScreen';
import LikedPodcastsScreen from './screens/LikedPodcastsScreen';
import SearchScreen from './screens/SearchScreen';
import UserDetailScreen from './screens/UserDetailScreen';

export type RootStackParamList = {
  Home: undefined
  Main: undefined
  SignIn: undefined
  SignUp: undefined
  PodcastLists: undefined
  CreatePodcastList: undefined 
  UpdatePodcastList: undefined
  Podcasts: undefined
  CreatePodcast: undefined
  UpdatePodcast: undefined
  ListenPodcast: undefined
  PodcastListDetail: undefined
  PodcastDetail: undefined
  SubscribedPodcastLists: undefined
  LikedPodcasts: undefined
  Playlists: undefined
  PlaylistDetail: undefined
  CreatePlaylist: undefined
  UpdatePlaylist: undefined
  SubscribedPodcastListDetailScreen: undefined
  UserDetail: undefined
  Search: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name='PodcastLists' component={PodcastListsScreen} options={{ title: 'Podcast Lists' }} />
        <Stack.Screen name='CreatePodcastList' component={CreatePodcastListScreen} options={{ title: 'Create Podcast List' }} />
        <Stack.Screen name='UpdatePodcastList' component={UpdatePodcastListScreen} options={{ title: 'Update Podcast List' }} />
        <Stack.Screen name='Podcasts' component={PodcastsScreen} options={{ title: 'Podcasts' }} />
        <Stack.Screen name='CreatePodcast' component={CreatePodcastScreen} options={{ title: 'Create Podcast' }} />
        <Stack.Screen name='UpdatePodcast' component={UpdatePodcastScreen} options={{ title: 'Update Podcast' }} />
        <Stack.Screen name='PodcastListDetail' component={PodcastListDetailScreen} options={{ title: 'Podcast List Detail' }} />
        <Stack.Screen name='PodcastDetail' component={PodcastDetailScreen} options={{ title: 'Podcast Detail' }} />
        <Stack.Screen name='ListenPodcast' component={ListenPodcastScreen} options={{ title: 'Listen' }} />
        <Stack.Screen name='SubscribedPodcastLists' component={SubscribedPodcastListsScreen} options={{ title: 'Subscribed Podcast Lists' }} />
        <Stack.Screen name='LikedPodcasts' component={LikedPodcastsScreen} options={{ title: 'Liked Podcasts' }}  />
        <Stack.Screen name='SubscribedPodcastListDetailScreen' component={SubscribedPodcastListsScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='UserDetail' component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={FeedScreen} />
      <Tab.Screen name='Library' component={LibraryScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}
