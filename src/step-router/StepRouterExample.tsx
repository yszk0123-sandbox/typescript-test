// アイデア
import React, { useCallback, useState } from 'react';

declare const EmailModal: React.FunctionComponent<any>;
declare const PasswordModal: React.FunctionComponent<any>;
declare const SubmitModal: React.FunctionComponent<any>;

enum Step {
  INPUT_EMAIL = 'INPUT_EMAIL',
  INPUT_PASSWORD = 'INPUT_PASSWORD',
  END = 'END',
}

type Route = CreateRoute<
  Step,
  {
    [Step.INPUT_EMAIL]: {
      state: {};
      next: Step.INPUT_PASSWORD | Step.END;
    };
    [Step.INPUT_PASSWORD]: {
      state: { email: string };
      next: Step.END;
    };
    [Step.END]: {
      state: { email: string; password: string };
      next: never;
    };
  }
>;

type Props = {
  onEnd: (value: { email: string; password: string }) => void;
};

export function StepRouterExample({ onEnd }: Props) {
  const route = useStepRoutes<Step, Step.INPUT_EMAIL, Route>(
    Step.INPUT_EMAIL,
    {},
  );

  switch (route.step) {
    case Step.INPUT_EMAIL: {
      return (
        <EmailModal
          onSubmit={(email: string) => {
            route.next(Step.INPUT_PASSWORD, { email });
          }}
        />
      );
    }
    case Step.INPUT_PASSWORD: {
      return (
        <PasswordModal
          onSubmit={(password: string) => {
            route.next(Step.END, { email: route.state.email, password });
          }}
        />
      );
    }
    case Step.END: {
      return (
        <SubmitModal
          onSubmit={() => {
            onEnd(route.state);
            // Error
            // route.next(Step.END, {});
          }}
        />
      );
    }
  }
}

// 実装

type RouteBase<S> = {
  [key: string]: {
    state: any;
    next: S;
  };
};
type CreateRoute<S, Base extends RouteBase<S>> = {
  [K in keyof Base]: {
    step: K;
    state: Base[K]['state'];
    next: Base[K]['next'] extends infer T
      ? T extends keyof Base
        ? <U extends T>(step: U, state: Base[U]['state']) => void
        : never
      : never;
  }
};

type UnionOf<T> = T[keyof T];
function useStepRoutes<
  S extends string,
  InitialS extends S,
  R extends CreateRoute<S, RouteBase<S>>
>(initialStep: InitialS, initialState: R[InitialS]['state']): UnionOf<R> {
  const [step, setStep] = useState<S>(initialStep);
  const [state, setState] = useState<R[S]['state']>(initialState);

  const next = useCallback((step: S, state: R[S]['state']) => {
    setStep(step);
    setState(state);
  }, []);

  const route = {
    step,
    state,
    next,
  };
  return (route as unknown) as UnionOf<R>;
}
