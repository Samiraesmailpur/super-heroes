export const selectHeroes = (state) => state.heroes.items;
export const selectHeroById = (state) => state.heroes.item;
export const selectIsLoading = (state) => state.heroes.isLoading;
export const selectError = (state) => state.heroes.error;
export const selectTotalHeroes = (state) => state.heroes.totalHeroes;
