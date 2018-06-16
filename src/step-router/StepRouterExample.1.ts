import { useState } from 'react';

enum Step {
  ONE,
  TWO,
  END,
}
enum Action {
  SUBMIT,
  CANCEL,
}
type Route = {
  [Step.ONE]: {
    step: Step.ONE;
    state: { email: string };
    next: {
      (action: Action.SUBMIT, state: Route[Step.TWO]['state']): void;
      (action: Action.CANCEL, state: Route[Step.END]['state']): void;
    };
  };
  [Step.TWO]: {
    step: Step.TWO;
    state: { email: string; password: string };
    next: {
      (action: Action.SUBMIT, state: Route[Step.ONE]['state']): void;
    };
  };
  [Step.END]: {
    step: Step.END;
    state: { end: number };
    next: {
      (action: Action.SUBMIT, state: Route[Step.ONE]['state']): void;
    };
  };
};
type UnionOf<T> = T[keyof T];
function useStepRoutes(
  initialStep: Step,
  initialState: Route[Step]['state'],
): UnionOf<Route> {
  const [step, setStep] = useState(initialStep);
  const [state, setState] = useState(initialState);

  const route = {
    step,
    state,
    next: (action: Action, state: any) => {
      setStep(initialStep);
      setState(state);
    },
  };
  return route as Route[Step];
}

export function StepRouterExample() {
  const route = useStepRoutes(Step.ONE, { email: '', password: '' });

  switch (route.step) {
    case Step.ONE: {
      route.next(Action.SUBMIT, { email: '', password: '' });
    }
  }
}
