import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ImageBackgroundInfoProps from './ImageBackgroundInfoProps';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  id: string;
  imagelink_portrait: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: string;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
};

const FavouriteItemCard = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavouriteItem,
}: Props) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfoProps
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}>
        <Text style={styles.DescriptionTitle}>Description</Text>
        <Text style={styles.DescriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

export default FavouriteItemCard;

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  ContainerLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
