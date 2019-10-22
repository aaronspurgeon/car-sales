export const ADDED_FEATURES = "ADDED_FEATURES";

export function addFeatures(features) {
  console.log(features);
  return {
    type: ADDED_FEATURES,
    payload: features
  };
}
