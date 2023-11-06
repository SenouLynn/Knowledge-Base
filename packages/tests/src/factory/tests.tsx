const factory = {
  happyPath: (label: string) => {
    it(label || "happy path :)", () => {
      expect(true).toBe(true);
    });
  },
  simpleTest: (params: {
    label: string;
    chkVal: any;
    run: (chkVal: any) => any;
    check: (res: any, chkVal: any) => void;
  }) => {
    it(params.label, () => {
      const res = params.run(params.chkVal);
      params.check(res, params.chkVal);
    });
  },
};

export default factory;
