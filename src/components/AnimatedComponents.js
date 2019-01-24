import posed from 'react-pose';

export const Button = posed.button({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
});
