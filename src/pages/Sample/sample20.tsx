import { Button } from '@mantine/core';

const Sample20 = () => {
  const test1 = async () => {
    console.log(1);
    // resolveが実行されたら、awaitの処理が終わる
    await new Promise<void>((resolve) => {
      window.setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  };

  const handleClick1 = async () => {
    await test1();
    console.log(3);
  };

  const test2 = () => {
    console.log(1);
    // rejectが実行されたら、awaitの処理が終わる
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  };

  const handleClick2 = async () => {
    await test2();
    console.log(3);
  };
  const test3 = () => {
    console.log(1);
    // rejectが実行されたら、awaitの処理が終わる
    return new Promise<void>((resolve) => {
      window.setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  };

  const handleClick3 = async () => {
    test3().then(() => {
      console.log(3);
    });
  };

  return (
    <div>
      <h1>complete-promise</h1>
      <Button onClick={handleClick1} color='orange'>
        clicked1!
      </Button>
      <Button
        onClick={function () {
          handleClick2();
        }}
        color='dark'
      >
        clicked2!
      </Button>
      <Button
        onClick={function () {
          console.log('clicked3');
          const func = handleClick3;
          func();
        }}
        color='gray'
      >
        clicked3!
      </Button>
    </div>
  );
};

export default Sample20;
