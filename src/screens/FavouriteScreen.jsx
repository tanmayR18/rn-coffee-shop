import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import EmptyListAnimation from '../components/EmptyListAnimation';
import HeaderBar from '../components/HeaderBar';
import FavouriteItemCard from '../components/FavouriteItemCard';

const FavouriteScreen = ({navigation}) => {
  const FavouriteList = useStore(state => state.FavouriteList);
  const tabBarHeight = useBottomTabBarHeight();
  const deleteFromFavoriteList = useStore(
    state => state.deleteFromFavoriteList,
  );
  const addToFavoriteList = useStore(state => state.addToFavoriteList);
  const ToggleFavourite = (favourite, type, id) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFLex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favourites" />
            {FavouriteList.length === 0 ? (
              <EmptyListAnimation title="No Favourites" />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavouriteList.map(data => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <FavouriteItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_square}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFLex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
