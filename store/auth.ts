import _ from 'lodash';

interface IAuthStoreState {
  required?: Boolean;
}

export enum MUTATION_TYPE {
  'ACCOUNT_UPDATE_REQUIRED' = 'ACCOUNT_UPDATE_REQUIRED',
}

export const state = () => ({
  required: false,
});

export const mutations = {
  [MUTATION_TYPE.ACCOUNT_UPDATE_REQUIRED](
    authStoreState: IAuthStoreState,
    required: Boolean
  ) {
    authStoreState.required = required;
  },
};

export const actions = {
  setRequired(context: any, required) {
    context.commit(MUTATION_TYPE.ACCOUNT_UPDATE_REQUIRED, required);
  },
};