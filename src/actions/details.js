export const ADDED_FEATURES = "ADDED_FEATURES";

export function addFeatures(features) {
  return {
    type: ADDED_FEATURES,
    payload: features
  };
}
