import electron from 'electron';
import test from 'ava';
import execa from 'execa';

// See https://github.com/sindresorhus/conf for more extensive tests
// See https://github.com/sindresorhus/electron-store for more tests

const run = async file => {
  const result = await execa.stdout(electron, [file], {
    env: {
      ELECTRON_ENABLE_LOGGING: true,
      ELECTRON_ENABLE_STACK_DUMPING: true,
      ELECTRON_NO_ATTACH_CONSOLE: true
    }
  });

  return result.trim();
};

test('is first run', async t => {
  const isFirstRun = await run('fixture.js');
  t.is(isFirstRun, 'true');
});

test('is not first run', async t => {
  const isFirstRun = await run('fixture.js');
  const isSecondRun = await run('fixture.js');
  t.is(isFirstRun, 'true');
  t.is(isSecondRun, 'false');
});

test('it should reset first run', async t => {
  const isFirstRun = await run('fixture.js');
  await run('fixture2.js');
  const isSecondRun = await run('fixture.js');
  t.is(isFirstRun, 'true');
  t.is(isSecondRun, 'true');
});

test.afterEach.always(async () => {
  await run('fixture-cleanup.js');
});

