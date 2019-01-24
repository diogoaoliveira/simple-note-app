import posed from 'react-pose';

export const Container = posed.div({
    open: { opacity: 1 },
    close: { opacity: 0 }
});

export const Button = posed.button({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
});
