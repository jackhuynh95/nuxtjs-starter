import _ from 'lodash';

interface IAccountStoreState {
  profile?: any;
}

export enum MUTATION_TYPE {
  'ACCOUNT_UPDATE_PROFILE' = 'ACCOUNT_UPDATE_PROFILE',
}

export const state: IAccountStoreState = {
  profile: undefined,
};

export const mutations = {
  [MUTATION_TYPE.ACCOUNT_UPDATE_PROFILE](
    accountStoreState: IAccountStoreState,
    profile: Account
  ) {
    accountStoreState.profile = profile;
  },
};

export const actions = {
  /*
    Get account details
  */
  getProfile(content: any) {
    return Promise.resolve()
      .then((profile: any) => {
        content.commit(MUTATION_TYPE.ACCOUNT_UPDATE_PROFILE, profile);
        return profile;
      })
      .catch(() => {
      });
  },
  resetProfile(context: any) {
    context.commit(MUTATION_TYPE.ACCOUNT_UPDATE_PROFILE, null);
  },
};