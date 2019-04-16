<template>
    <div>
        <div class="add-btn">
            <Button type="primary" @click="modal = true">增加</Button>
        </div>
        <Table :columns="columns" :data="data"></Table>
        <Modal
            v-model="modal"
            title="增加图表"
            @on-cancel="cancel"
        >
            <Form ref="formInline" :model="formInline" :rules="ruleInline" vertical>
                <Row>
                    <Col :span="10">
                        <FormItem prop="chartName" label="名称">
                            <Input type="text" v-model="formInline.chartName" placeholder="图表名称">
                            </Input>
                        </FormItem>
                        <FormItem prop="chartSecondType" label="图表标识">
                            <Select v-model="formInline.chartSecondType" style="width:200px">
                                <Option v-for="item in biaoShi" :value="item.value" :key="item.key">{{item.key}}</Option>
                            </Select>
                        </FormItem>
                        <FormItem prop="maxCol" label="最多添加列">
                            <Input type="text" v-model="formInline.maxCol">
                            </Input>
                        </FormItem>
                        <FormItem prop="maxRow" label="最多添加行">
                            <Input type="text" v-model="formInline.maxRow">
                            </Input>
                        </FormItem>
                        <FormItem prop="maxData" label="最多添加数据">
                            <Input type="text" v-model="formInline.maxData">
                            </Input>
                        </FormItem>
                    </Col> 
                    <Col :span="10" :offset="2">
                        <FormItem prop="chartTypeId" label="图表类型">
                            <Select v-model="formInline.chartTypeId" style="width:200px">
                                <Option value="aa689260951a48aeafae6a644082b77a">柱状图</Option>
                                <Option value="9b527b304bb74a139ad1b6e054ce1c18">环形图</Option>
                                <Option value="03bf212a0e0c40d88f00eedb1b8d7f93">折线图</Option>
                            </Select>
                        </FormItem>
                        <FormItem prop="status" label="发布状态">
                            <Select v-model="formInline.status" style="width:200px">
                                <Option value="10001">发布</Option>
                                <Option value="10002">不发布</Option>
                            </Select>
                        </FormItem>
                        <FormItem prop="previewUrl" label="预览图">
                            <div class="demo-upload-list" v-for="item in uploadList">
                                <template v-if="item.status === 'finished'">
                                    <img :src="item.url">
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                </template>
                                <Modal title="预览图片" v-model="visible">
                                    <img :src="item.url" v-if="visible" style="width: 100%">
                                </Modal>
                            </div>
                                <Upload
                                    ref="upload"
                                    :action="fileUrl"
                                    name="file"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    :before-upload="handleBeforeUpload"
                                    :on-success="handleSuccess"
                                    :on-format-error="handleFormatError"
                                    :on-exceeded-size="handleMaxSize"
                                    :show-upload-list="false"
                                    style="display: inline-block;width:58px;"
                                    type="drag"
                                >
                                    <div style="width: 58px;height:58px;line-height: 58px;">
                                        <Icon type="ios-camera" size="20"></Icon>
                                    </div>
                                </Upload>
                         
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="cancel">取消</Button>
                <Button type="primary" size="large" @click="ok">确定</Button>
            </div>
        </Modal>
        <pre>
            {{data[0]}}
            {{cachdata[0]}}
        </pre>
    </div>
</template>

<script>
import _ from 'lodash';
import {equalObj, fileUrl} from '~/util';
export default {
    name: 'production',
    data(){
        return {
            columns: [
                {
                    title: 'ID',
                    key: 'chartSecondType',
                },
                {
                    title: '名称',
                    key: 'chartName',
                    render: (h, record) => {
                        if(record.row.editable){
                            return h('Input', {
                                props: {
                                    value: record.row.chartName,
                                },
                                on: {
                                    'on-change': (e)=>{
                                        this.changeValue(e, record, 'chartName');
                                    },
                                }
                            })
                        }
                        return h('span', record.row.chartName)
                    }
                },
                {
                    title: '操作',
                    key: 'chartId',
                    render: (h, record) => {
                        console.log(record, '')
                        if(record.row.chartId === this.editId){
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(record, 'cancel')
                                        }
                                    }
                                }, '取消'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(record, 'save')
                                        }
                                    }
                                }, '保存'),
                            ])
                        }
                        
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px',
                                },
                                on: {
                                    click: () => {
                                        this.edit(record, 'edit')
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small',
                                },
                                on: {
                                    click: () => {
                                        this.edit(record, 'del')
                                    }
                                }
                            }, '删除'),
                        ])
                    },
                }
            ],
            modal: false,
            formInline: {
                chartName: '',
                chartSecondType: '',
                maxCol: '',
                maxRow: '',
                maxData: '',
                chartTypeId: '',
                status: '',
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码至少是6位字符', trigger: 'blur' }
                ]
            },
            data: [],
            cachdata: [],
            biaoShi: [
                {
                    key: 'BarHorizontal',
                    value: '2001',
                },
                {
                    key: 'Circle',
                    value: '2002',
                },
                {
                    key: 'Line',
                    value: '2003',
                },
                {
                    key: 'Bar',
                    value: '2009',
                },
            ],
            //上传文件的配置
            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                }
            ],
            imgName: '',
            visible: false,
            uploadList: [],
            fileUrl,

            editId: '',
        }
    },
    // computed: {
    //     data: function(){
    //         return this.$store.state.test.data;
    //     }
    // },
    methods: {
        edit: function(record, key){
            if(key === 'edit'){
                const _row = {...record.row};
                _row.editable = true;
                this.$set(this.data, record.index, _row);
            }
            if(key === 'cancel'){
                const _row = {...record.row};
                delete _row.editable;
                this.$set(this.data, record.index, _row);
            }
            if(key === 'save'){
                const _row = {...record.row};
                delete _row.editable;
                this.$set(this.data, record.index, _row);
                // console.log(equalObj(this.cachdata[record.index], this.data[record.index]),_row)
                //如果相等，直接return
                if(equalObj(this.cachdata[record.index], this.data[record.index])){
                    return false;
                }
                const payload = this.cachdata[record.index];
                this.$store.dispatch('test/edit', {payload}).then(res=>{
                    if(res && res.code === 0){
                        this.$Message.success('操作成功');
                        this.data = _.cloneDeep(this.cachdata);
                    }else{
                        this.$Message.error('操作失败');
                    }
                })
            }
            if(key === 'del'){
                this.$store.dispatch('test/del', {payload: {chartId: record.row.chartId}}).then(res=> {
                    if(res && res.code === 0){
                        this.$delete(this.data, record.index);
                    }
                })
            }
        },
        add: function(){

        },
        cancel: function(){
            this.$refs['formInline'].resetFields();
            this.modal = false;
        },
        ok: function() {
            let self = this;
            this.$refs['formInline'].validate((values) => {
                if (values) {
                    self.$store.dispatch('test/add', {payload: {...self.formInline, previewUrl: self.uploadList[0].url}}).then(res=>{
                        if(res && res.code === 0){
                            self.modal = false;
                            self.data.unshift({
                                chartId: res.data.chartId,
                                ...self.formInline,
                                previewUrl: self.uploadList[0].url
                            });
                            self.formInline = {
                                chartName: '',
                                chartSecondType: '',
                                maxCol: '',
                                maxRow: '',
                                maxData: '',
                                chartTypeId: '',
                                status: '',
                            };
                        }
                    })
                } else {
                    self.$Message.error('操作失败')
                }
            })
        },
        changeValue: function(e, record, key){
            //在有key值的情况下，可以监听到改变
            this.cachdata[record.index][key] = e.target.value;
        },
        //图表上传
        handleView (name) {
                this.imgName = name;
                this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            this.$refs.upload.$el.style.display = 'inline-block';
        },
        handleSuccess (res, file, fileList) {
            file.url = res.data.fileUrl;
            const check = this.uploadList.length;
            if(check === 1){
                this.$refs.upload.$el.style.display = 'none';
            }
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '图片格式不正确',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '文件大小超过尺寸限制',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 1;
            if (!check) {
                this.$Notice.warning({
                    title: '一次只能上传一张图片'
                });
            }
            return check;
        },
        // handleProgress (e, file, fileList){
        //     console.log(file)
        //     this.uploadList = file
        // }
    },
    mounted(){
        // this.$store.dispatch('test/fetch', {
        //     id: 5,
        // }).then(res => {
        //     if(res && res.code === 0){
        //         this.data = res.data.dataList;
        //         this.cachdata = _.cloneDeep(res.data.dataList);
        //     }
        // });
        this.data = this.$store.state.test.dataList
        this.cachdata = _.cloneDeep(this.$store.state.test.dataList);
        this.uploadList = this.$refs.upload.fileList;
    },
}
</script>

<style lang="less" scoped>
    .add-btn{
        margin-bottom: 20px;
    }
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>


