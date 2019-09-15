import initStoryshots from '@storybook/addon-storyshots';
import shallow from 'react-test-renderer/shallow'
import Stories2SnapsConverter from "@storybook/addon-storyshots/dist/Stories2SnapsConverter";


initStoryshots({
    test({ story, context }) {
        const converter = new Stories2SnapsConverter();
        const snapshotFileName = converter.getSnapshotFileName(context);

        const shallowRenderer = shallow.createRenderer()
        const result = shallowRenderer.render(story.render(context));


        expect(result).toMatchSpecificSnapshot(snapshotFileName);
    }
});

