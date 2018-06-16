import { useCallback, useState } from 'react';

enum Step {
  ONE = 'ONE',
  TWO = 'TWO',
  END = 'END',
}
type RouteBase<S> = {
  [key: string]: {
    state: any;
    next: S[];
  };
};
type CreateRoute<S, Base extends RouteBase<S>> = {
  [K in keyof Base]: {
    step: K;
    state: Base[K]['state'];
    next: Base[K]['next'] extends [infer T1]
      ? T1 extends keyof Base
        ? {
            (step: T1, state: Base[T1]['state']): void;
          }
        : never
      : Base[K]['next'] extends [infer T1, infer T2]
      ? T1 extends keyof Base
        ? T2 extends keyof Base
          ? {
              (step: T1, state: Base[T1]['state']): void;
              (step: T2, state: Base[T2]['state']): void;
            }
          : never
        : never
      : Base[K]['next'] extends [infer T1, infer T2, infer T3]
      ? T1 extends keyof Base
        ? T2 extends keyof Base
          ? T3 extends keyof Base
            ? {
                (step: T1, state: Base[T1]['state']): void;
                (step: T2, state: Base[T2]['state']): void;
                (step: T3, state: Base[T3]['state']): void;
              }
            : never
          : never
        : never
      : never;
  }
};
type A = {
  [Step.ONE]: {
    state: { email: string };
    next: [Step.TWO, Step.END];
  };
  [Step.TWO]: {
    state: { email: string; password: string };
    next: [Step.ONE];
  };
  [Step.END]: {
    state: { token: string };
    next: [];
  };
};
type Route = CreateRoute<Step, A>;
type UnionOf<T> = T[keyof T];
function useStepRoutes<
  S extends string,
  R extends CreateRoute<S, RouteBase<S>>
>(initialStep: S, initialState: R[keyof R]['state']): UnionOf<R> {
  const [step, setStep] = useState<S>(initialStep);
  const [state, setState] = useState(initialState);

  const next: R[keyof R]['next'] = useCallback((step: S, state: any) => {
    setStep(step);
    setState(state);
  }, []);

  const route: UnionOf<R> = {
    step,
    state,
    next,
  };
  return route;
}

export function StepRouterExample() {
  const route = useStepRoutes<Step, Route>(Step.ONE, { email: 1 });

  switch (route.step) {
    case Step.ONE: {
      route.next(Step.TWO, { email: '', password: '' });
    }
  }
}
