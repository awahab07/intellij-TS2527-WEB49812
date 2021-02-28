import * as fromProgram from './program.reducer';
import { selectProgramState } from './program.selectors';

describe('Program Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProgramState({
      [fromProgram.programFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
