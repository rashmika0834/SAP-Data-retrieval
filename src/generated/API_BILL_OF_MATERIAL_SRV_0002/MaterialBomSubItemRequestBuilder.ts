/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { MaterialBomSubItem } from './MaterialBomSubItem';

/**
 * Request builder class for operations supported on the {@link MaterialBomSubItem} entity.
 */
export class MaterialBomSubItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialBomSubItem<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialBomSubItem` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialBomSubItem` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialBomSubItem<T>, T> {
    return new GetAllRequestBuilder<MaterialBomSubItem<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaterialBomSubItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialBomSubItem`.
   */
  create(
    entity: MaterialBomSubItem<T>
  ): CreateRequestBuilder<MaterialBomSubItem<T>, T> {
    return new CreateRequestBuilder<MaterialBomSubItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialBomSubItem` entity based on its keys.
   * @param billOfMaterial Key property. See {@link MaterialBomSubItem.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBomSubItem.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBomSubItem.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBomSubItem.billOfMaterialVersion}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MaterialBomSubItem.billOfMaterialItemNodeNumber}.
   * @param headerChangeDocument Key property. See {@link MaterialBomSubItem.headerChangeDocument}.
   * @param material Key property. See {@link MaterialBomSubItem.material}.
   * @param plant Key property. See {@link MaterialBomSubItem.plant}.
   * @param bomItemInternalChangeCount Key property. See {@link MaterialBomSubItem.bomItemInternalChangeCount}.
   * @param bomSubItemNumberValue Key property. See {@link MaterialBomSubItem.bomSubItemNumberValue}.
   * @returns A request builder for creating requests to retrieve one `MaterialBomSubItem` entity based on its keys.
   */
  getByKey(
    billOfMaterial: DeserializedType<T, 'Edm.String'>,
    billOfMaterialCategory: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVariant: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVersion: DeserializedType<T, 'Edm.String'>,
    billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>,
    headerChangeDocument: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    bomItemInternalChangeCount: DeserializedType<T, 'Edm.String'>,
    bomSubItemNumberValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialBomSubItem<T>, T> {
    return new GetByKeyRequestBuilder<MaterialBomSubItem<T>, T>(
      this.entityApi,
      {
        BillOfMaterial: billOfMaterial,
        BillOfMaterialCategory: billOfMaterialCategory,
        BillOfMaterialVariant: billOfMaterialVariant,
        BillOfMaterialVersion: billOfMaterialVersion,
        BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber,
        HeaderChangeDocument: headerChangeDocument,
        Material: material,
        Plant: plant,
        BOMItemInternalChangeCount: bomItemInternalChangeCount,
        BOMSubItemNumberValue: bomSubItemNumberValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialBomSubItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialBomSubItem`.
   */
  update(
    entity: MaterialBomSubItem<T>
  ): UpdateRequestBuilder<MaterialBomSubItem<T>, T> {
    return new UpdateRequestBuilder<MaterialBomSubItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialBomSubItem`.
   * @param billOfMaterial Key property. See {@link MaterialBomSubItem.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBomSubItem.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBomSubItem.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBomSubItem.billOfMaterialVersion}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MaterialBomSubItem.billOfMaterialItemNodeNumber}.
   * @param headerChangeDocument Key property. See {@link MaterialBomSubItem.headerChangeDocument}.
   * @param material Key property. See {@link MaterialBomSubItem.material}.
   * @param plant Key property. See {@link MaterialBomSubItem.plant}.
   * @param bomItemInternalChangeCount Key property. See {@link MaterialBomSubItem.bomItemInternalChangeCount}.
   * @param bomSubItemNumberValue Key property. See {@link MaterialBomSubItem.bomSubItemNumberValue}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBomSubItem`.
   */
  delete(
    billOfMaterial: string,
    billOfMaterialCategory: string,
    billOfMaterialVariant: string,
    billOfMaterialVersion: string,
    billOfMaterialItemNodeNumber: string,
    headerChangeDocument: string,
    material: string,
    plant: string,
    bomItemInternalChangeCount: string,
    bomSubItemNumberValue: string
  ): DeleteRequestBuilder<MaterialBomSubItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialBomSubItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBomSubItem` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialBomSubItem<T>
  ): DeleteRequestBuilder<MaterialBomSubItem<T>, T>;
  delete(
    billOfMaterialOrEntity: any,
    billOfMaterialCategory?: string,
    billOfMaterialVariant?: string,
    billOfMaterialVersion?: string,
    billOfMaterialItemNodeNumber?: string,
    headerChangeDocument?: string,
    material?: string,
    plant?: string,
    bomItemInternalChangeCount?: string,
    bomSubItemNumberValue?: string
  ): DeleteRequestBuilder<MaterialBomSubItem<T>, T> {
    return new DeleteRequestBuilder<MaterialBomSubItem<T>, T>(
      this.entityApi,
      billOfMaterialOrEntity instanceof MaterialBomSubItem
        ? billOfMaterialOrEntity
        : {
            BillOfMaterial: billOfMaterialOrEntity!,
            BillOfMaterialCategory: billOfMaterialCategory!,
            BillOfMaterialVariant: billOfMaterialVariant!,
            BillOfMaterialVersion: billOfMaterialVersion!,
            BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber!,
            HeaderChangeDocument: headerChangeDocument!,
            Material: material!,
            Plant: plant!,
            BOMItemInternalChangeCount: bomItemInternalChangeCount!,
            BOMSubItemNumberValue: bomSubItemNumberValue!
          }
    );
  }
}
