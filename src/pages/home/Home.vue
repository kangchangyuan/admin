<script setup>
import { ref, reactive } from 'vue'

const stageRef = ref(null)
const transformerRef = ref(null)
const configKonva = reactive({ width: 400, height: 600 })
const configCircle = reactive({
  x: 100,
  y: 400,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  scaleX: 1,
  scaleY: 1,
  strokeWidth: 6,
  name:'circleOne',
  draggable: true,
})
const configText = reactive({
  x: 50,
  y: 100,
  radius: 70,
  fill: 'green',
  text: 'KANGCHUANYUAN',
  scaleX: 1,
  scaleY: 1,
  name:'textOne',
  draggable: true,
})
const selectedShapeName = ref('')
// console.log(stageRef)
const handleTransformEnd = (e) => {
  // console.log(e);
  // 因为数据是动态的所以不需要在重新赋值
  // configCircle.scaleX = e.target.scaleX()
  // configCircle.scaleY = e.target.scaleY()
}
const updateTransformer = () => {
  // here we need to manually attach or detach Transformer node
  const transformerNode = transformerRef.value.getNode();

  const stage = stageRef.value.getStage();

  // const { selectedShapeName } = this;

  const selectedNode = stage.findOne('.' + selectedShapeName.value);
  // do nothing if selected node is already attached
  if (selectedNode === transformerNode.node()) {
    return;
  }

  if (selectedNode) {
    // attach to another node
    transformerNode.nodes([selectedNode])
  } else {
    // remove transformer
    transformerNode.nodes([])
  }
}
const handleStageMouseDown = (e) => {
  // clicked on stage - clear selection
  console.log(e.target)
  if (e.target === e.target.getStage()) {
    console.log(e.target.getStage())
    selectedShapeName.value = ''
    // this.selectedShapeName = '';
    updateTransformer();
    return
  }

  // clicked on transformer - do nothing
  const clickedOnTransformer =
    e.target.getParent().className === 'Transformer';
  if (clickedOnTransformer) {
    return;
  }

  // find clicked  by it name
  
  selectedShapeName.value = e.target.name();
  e.target.moveToTop()
 
  updateTransformer();
}
const saveJson = () => {
  console.log(stageRef.value.getStage().toJSON())
}
</script>

<template>
  <a-row align="start">
    <a-col :span="6">
      <div>col - 6</div>
    </a-col>
    <a-col :span="12">
      <div>
        <konva-stage
          ref="stageRef"
          :config="configKonva"
          @mousedown="handleStageMouseDown"
          @touchstart="handleStageMouseDown"
        >
          <konva-layer>
            <konva-circle
              @transformend="handleTransformEnd"
              :config="configCircle"
            ></konva-circle>
            <konva-text
              @transformend="handleTransformEnd"
              :config="configText"
            ></konva-text>
            <konva-transformer ref="transformerRef" />
          </konva-layer>
        </konva-stage>
      </div>
    </a-col>

    <a-col :span="6">
      <div><a-button @click="saveJson">保存</a-button></div>
    </a-col>
  </a-row>
</template>
<style scoped></style>
